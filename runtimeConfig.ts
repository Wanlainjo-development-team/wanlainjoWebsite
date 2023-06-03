import { useRuntimeConfig } from 'nuxt/app'

let runtime = useRuntimeConfig()

export default {
    publicRuntimeConfig: {
        apiKey: runtime?.apiKey || runtime?.public?.apiKey,
        authDomain: runtime?.authDomain || runtime?.public?.authDomain,
        projectId: runtime?.projectId || runtime?.public?.projectId,
        storageBucket: runtime?.storageBucket || runtime?.public?.storageBucket,
        messagingSenderId: runtime?.messagingSenderId || runtime?.public?.messagingSenderId,
        appId: runtime?.appId || runtime?.public?.appId,
        measurementId: runtime?.measurementId || runtime?.public?.measurementId,
    },
};