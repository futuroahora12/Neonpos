import { BiometricAuth } from '@aparajita/capacitor-biometric-auth';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

// Expose only the native APIs needed by the NEON POS HTML application.
window.NEONPOSNative = Object.freeze({ BiometricAuth, App, Capacitor });
