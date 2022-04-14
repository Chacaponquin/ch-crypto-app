export const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        tiers: "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
    },
    headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "32ea61c07cmsh0e54b5b205a547fp16232bjsn63e17d86aa3a",
    },
};