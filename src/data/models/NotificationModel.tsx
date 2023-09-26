export interface NotificationModel {
  id: string;
  type: string;
  notifiableType?: string;
  notifiableId?: number;
  title: string;
  data: any;
  readAt?: Date;
  createdAt: Date;
}

export const notificationFromMap = (map: any): NotificationModel => {
  return {
    id: map['id'],
    type: map['type'],
    notifiableType: map['notifiable_type'],
    notifiableId: map['notifiable_id'],
    data: map['data'],
    readAt: map['read_at'],
    createdAt: map['created_at'],
    title: map['data']['title'],
  };
};
