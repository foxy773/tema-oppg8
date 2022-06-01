import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "778f7k7i",
	dataset: "production",
	apiVersion: "2022-05-22",
	token: import.meta.env.VITE_SANITY_API_TOKEN,
	useCDN: false
})