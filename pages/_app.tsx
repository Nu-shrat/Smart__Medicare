import AppLayout from "@layouts/AppLayout"
import AdminPanelLayout from "@layouts/AdminPanelLayout"

import "@styles/styles.css"

import type { AppProps } from "next/app"
import { useRouter } from "next/router"

function AppMain({ Component, pageProps }: AppProps) {
	const isRouteRootAdmin = () => {
		return useRouter().asPath.includes("admin")
	}

	return (
		<>
			{isRouteRootAdmin() ? (
				<AdminPanelLayout>
					<Component {...pageProps} />
				</AdminPanelLayout>
			) : (
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			)}
		</>
	)
}

export default AppMain
