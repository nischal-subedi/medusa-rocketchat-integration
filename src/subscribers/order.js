import rocketChatService from "../services/rocketchat-integration"

class OrderSubscriber {
	constructor({ rocketChatService, eventBusService }) {
		this.rocketChatService = rocketChatService

		this.eventBus_ = eventBusService

		this.eventBus_.subscribe("order.placed", async ({ id }) => {
			await this.rocketChatService.orderNotification(id)
		})
	}
}

export default OrderSubscriber
