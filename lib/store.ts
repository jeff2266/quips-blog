import { create } from 'zustand'
import { NhostClient } from '@nhost/nextjs'

export const useStore = create<{nhost: NhostClient}>(set => ({
	nhost: new NhostClient({
		subdomain: 'nqbetoellybtjelcsecg',
		region: 'us-west-2'
	})
}))
