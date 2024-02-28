export interface CreateEventSubscriptionResponse {
  eventSubscriptionId: string;
  subscriptionDetail: SubscriptionDetail;
  webhook: Webhook;
  startsAt: string;
}

interface SubscriptionDetail {
  device: {
    phoneNumber: string;
  };
  eventType: EventType;
}

interface Webhook {
  notificationUrl: string;
  notificationAuthToken: string;
}

enum EventType {
  ROAMING_ON = 'ROAMING_ON',
  // ROAMING_OFF, ROAMING_STATUS, ROAMING_CHANGE_COUNTRY, CONNECTIVITY, etc.
}

export interface GetEventSubscriptionResponse {}
