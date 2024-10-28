import { NhostClient } from '@nhost/nextjs'

export const nhost = new NhostClient({
	subdomain: 'nqbetoellybtjelcsecg',
	region: 'us-west-2'
})

export const qGetPrompts = `
    query {
        prompt {
            id
            prompt
            user {
                displayName
            }
            created
        }
    }
`