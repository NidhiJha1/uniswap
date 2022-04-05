import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "889q2uee",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skZVQjuUBi6JCxSSbiufYR6QMeIph2i8ac8YQZFb0H0XjK83xOKNaIj2ARUkhbLYlWl4IfQzl7FCyClyhGC2zIuHulSG9A2U6IMVSa1rw7hVevlfY1Vla6aRl6CTTTQ2h66k2DRfOrVFnyBpMJQXyvy14PedsQtRLLo18xbFQ5hNdaMC4BNX",
  useCdn:false,  
});
