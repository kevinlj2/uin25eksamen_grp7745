import { createClient } from "@sanity/client";

const options = {
  projectId: "67ysked6",
  dataset: "production",
};

const client = createClient({
  ...options,
  apiVersion: "2025-04-08",
  useCdn: false,
});

export default client;
