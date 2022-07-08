﻿// /*
//  * Morgan Stanley makes this available to you under the Apache License,
//  * Version 2.0 (the "License"). You may obtain a copy of the License at
//  *
//  *      http://www.apache.org/licenses/LICENSE-2.0.
//  *
//  * See the NOTICE file distributed with this work for additional information
//  * regarding copyright ownership. Unless required by applicable law or agreed
//  * to in writing, software distributed under the License is distributed on an
//  * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
//  * or implied. See the License for the specific language governing permissions
//  * and limitations under the License.
//  */

using ComposeUI.Messaging.Client;
using ComposeUI.Messaging.Client.Transport.WebSocket;
using ComposeUI.Messaging.Prototypes;
using Microsoft.AspNetCore.Mvc.Testing;

namespace ComposeUI.Messaging.IntegrationTests;

public class WebSocketEndToEndTests
{
    public WebSocketEndToEndTests()
    {
        //App = new WebApplicationFactory<Program>();
        WebSocketUri = new Uri("wss://localhost:7098/ws");
    }

    protected readonly WebApplicationFactory<Program> App;
    protected readonly Uri WebSocketUri;

    [Fact]
    public async Task Client_can_connect()
    {
        var client = CreateClient();
        await client.ConnectAsync();
    }

    [Fact]
    public async Task Client_can_subscribe_and_receive_messages()
    {
        var publisher = CreateClient();
        var subscriber = CreateClient();
        var observerMock = new Mock<IObserver<RouterMessage>>();

        await subscriber.SubscribeAsync(topicName: "test-topic", observerMock.Object);
        await Task.Delay(100);
        await publisher.PublishAsync(topicName: "test-topic", payload: "test-payload");
        await Task.Delay(100);

        observerMock.Verify(x => x.OnNext(It.Is<RouterMessage>(msg => msg.Payload!.SequenceEqual("test-payload"))));
    }

    [Fact]
    public async Task Client_can_register_itself_as_a_service()
    {
        var client = CreateClient();
        await client.RegisterServiceAsync(serviceName: "test-service", (name, payload) => default);
        await client.UnregisterServiceAsync("test-service");
    }

    [Fact]
    public async Task Client_can_invoke_a_registered_service()
    {
        var service = CreateClient();

        var handlerMock = new Mock<ServiceInvokeHandler>();
        handlerMock
            .Setup(_ => _.Invoke("test-service", It.IsAny<string>()))
            .Returns(new ValueTask<string?>("test-response"));
        await service.RegisterServiceAsync(serviceName: "test-service", handlerMock.Object);

        var client = CreateClient();

        var response = await client.InvokeAsync(serviceName: "test-service", payload: "test-request");

        response.Should().BeEquivalentTo("test-response");
        handlerMock.Verify(_ => _.Invoke("test-service", "test-request"));

        await service.UnregisterServiceAsync("test-service");
    }

    private IMessageRouter CreateClient()
    {
        return new MessageRouterClient(
            new WebSocketClientConnection(new MessageRouterWebSocketOptions {Uri = WebSocketUri}));
    }
}