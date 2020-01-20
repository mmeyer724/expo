import { NativeModulesProxy, ProxyNativeModule } from '@unimodules/core';
import { PermissionResponse } from 'unimodules-permissions-interface';

export enum IosAlertStyle {
  NONE = 0,
  BANNER = 1,
  ALERT = 2,
}

export enum IosAllowsPreviews {
  NEVER = 0,
  ALWAYS = 1,
  WHEN_AUTHENTICATED = 2,
}

export enum IosAuthorizationStatus {
  NOT_DETERMINED = 0,
  DENIED = 1,
  AUTHORIZED = 2,
  PROVISIONAL = 3,
}

export enum AndroidImportance {
  UNSPECIFIED = -1000,
  NONE = 0,
  MIN = 1,
  LOW = 2,
  DEEFAULT = 3,
  HIGH = 4,
  MAX = 5,
}

export interface NotificationPermissionsStatus extends PermissionResponse {
  android?: {
    importance: AndroidImportance;
  };
  ios?: {
    status: IosAuthorizationStatus;
    allowsDisplayInNotificationCenter: boolean | null;
    allowsDisplayOnLockScreen: boolean | null;
    allowsDisplayInCarPlay: boolean | null;
    allowsAlert: boolean | null;
    allowsBadge: boolean | null;
    allowsSound: boolean | null;
    allowsCriticalAlerts: boolean | null;
    alertStyle: IosAlertStyle;
    allowsPreviews: IosAllowsPreviews;
    providesAppNotificationSettings: boolean | null;
    allowsAnnouncements: boolean | null;
  };
}

export interface NotificationPermissionsRequest {
  allowAlert?: boolean;
  allowBadge?: boolean;
  allowSound?: boolean;
  allowDisplayInCarPlay?: boolean;
  allowCriticalAlerts?: boolean;
  provideAppNotificationSettings?: boolean;
  allowProvisional?: boolean;
  allowAnnouncements?: boolean;
}

export interface NotificationPermissionsModule extends ProxyNativeModule {
  getPermissionsAsync: () => Promise<NotificationPermissionsStatus>;
  requestPermissionsAsync: (
    request: NotificationPermissionsRequest
  ) => Promise<NotificationPermissionsStatus>;
}

export default (NativeModulesProxy.ExpoNotificationPermissionsModule as any) as NotificationPermissionsModule;
