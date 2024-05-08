import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
  methods: "GET"
});

const teams = [
  {
    id: 1,
    name: "McLaren",
    base: "Working, United Kingdom",
    founded: 1963,
    founder: "Bruce McLaren",
    current_ceo: "Zak Brown",
    website: "https://www.mclaren.com/",
    headquarters: "Woking, Surrey, United Kingdom",
    sport: "Formula 1",
    championships: {
      constructors: 8,
      drivers: 12,
    },
  },
  {
    id: 2,
    name: "Ferrari",
    base: "Maranello, Italy",
    founded: 1939,
    founder: "Enzo Ferrari",
    current_ceo: "Louis Camilleri",
    website: "https://www.ferrari.com/",
    headquarters: "Maranello, Italy",
    sport: "Formula 1",
    championships: {
      constructors: 16,
      drivers: 15,
    },
  },
  {
    id: 3,
    name: "Mercedes-AMG Petronas Formula One Team",
    base: "Brackley, United Kingdom",
    founded: 2010,
    founder: "Mercedes-Benz",
    current_ceo: "Toto Wolff",
    website: "https://www.mercedesamgf1.com/",
    headquarters: "Brackley, Northamptonshire, United Kingdom",
    sport: "Formula 1",
    championships: {
      constructors: 8,
      drivers: 8,
    },
  },
  {
    id: 4,
    name: "Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
    founded: 2004,
    founder: "Dietrich Mateschitz",
    current_ceo: "Christian Horner",
    website: "https://www.redbullracing.com/",
    headquarters: "Milton Keynes, United Kingdom",
    sport: "Formula 1",
    championships: {
      constructors: 4,
      drivers: 4,
    },
  },
  {
    id: 5,
    name: "Williams Racing",
    base: "Grove, United Kingdom",
    founded: 1977,
    founder: "Frank Williams",
    current_ceo: "Jost Capito",
    website: "https://www.williamsf1.com/",
    headquarters: "Grove, Oxfordshire, United Kingdom",
    sport: "Formula 1",
    championships: {
      constructors: 9,
      drivers: 7,
    },
  },
  {
    id: 6,
    name: "Alpine F1 Team",
    base: "Enstone, United Kingdom",
    founded: 1977,
    founder: "Jean-Pierre Jabouille",
    current_ceo: "Laurent Rossi",
    website: "https://www.alpinecars.com/en/racing/alpine-f1-team/",
    headquarters: "Enstone, Oxfordshire, United Kingdom",
    sport: "Formula 1",
    championships: {
      constructors: 2,
      drivers: 2,
    },
  },
  {
    id: 7,
    name: "Scuderia AlphaTauri",
    base: "Faenza, Italy",
    founded: 2006,
    founder: "Dietrich Mateschitz",
    current_ceo: "Franz Tost",
    website: "https://www.scuderiaalphatauri.com/",
    headquarters: "Faenza, Italy",
    sport: "Formula 1",
    championships: {
      constructors: 0,
      drivers: 0,
    },
  },
  {
    id: 8,
    name: "Alfa Romeo Racing",
    base: "Hinwil, Switzerland",
    founded: 1950,
    founder: "Alfa Romeo",
    current_ceo: "Frédéric Vasseur",
    website: "https://www.sauber-group.com/motorsport/f1/",
    headquarters: "Hinwil, Switzerland",
    sport: "Formula 1",
    championships: {
      constructors: 0,
      drivers: 0,
    },
  },
  {
    id: 9,
    name: "Haas F1 Team",
    base: "Kannapolis, United States",
    founded: 2016,
    founder: "Gene Haas",
    current_ceo: "Guenther Steiner",
    website: "https://www.haasf1team.com/",
    headquarters: "Kannapolis, North Carolina, United States",
    sport: "Formula 1",
    championships: {
      constructors: 0,
      drivers: 0,
    },
  },
  {
    id: 10,
    name: "Scuderia Ferrari",
    base: "Maranello, Italy",
    founded: 1929,
    founder: "Enzo Ferrari",
    current_ceo: "John Elkann",
    website: "https://www.ferrari.com/",
    headquarters: "Maranello, Italy",
    sport: "Formula 1",
    championships: {
      constructors: 16,
      drivers: 15,
    },
  },
];

const drivers = [
  {
    id: 1,
    name: "Lewis Hamilton",
    team: "Mercedes",
    nationality: "British",
    birth_date: "1985-01-07",
    championships: 7,
    race_wins: 100,
    podiums: 176,
    pole_positions: 101,
    current_contract_until: "2023",
    website: "https://www.lewishamilton.com/",
  },
  {
    id: 2,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    nationality: "Dutch",
    birth_date: "1997-09-30",
    championships: 1,
    race_wins: 20,
    podiums: 58,
    pole_positions: 10,
    current_contract_until: "2025",
    website: "https://www.verstappen.nl/",
  },
  {
    id: 3,
    name: "Charles Leclerc",
    team: "Scuderia Ferrari",
    nationality: "Monégasque",
    birth_date: "1997-10-16",
    championships: 0,
    race_wins: 2,
    podiums: 14,
    pole_positions: 5,
    current_contract_until: "2024",
    website: "https://www.charlesleclerc.com/",
  },
  {
    id: 4,
    name: "Valtteri Bottas",
    team: "Alfa Romeo Racing",
    nationality: "Finnish",
    birth_date: "1989-08-28",
    championships: 0,
    race_wins: 10,
    podiums: 57,
    pole_positions: 17,
    current_contract_until: "2022",
    website: "https://www.valtteribottas.com/",
  },
  {
    id: 5,
    name: "Daniel Ricciardo",
    team: "McLaren",
    nationality: "Australian",
    birth_date: "1989-07-01",
    championships: 0,
    race_wins: 8,
    podiums: 32,
    pole_positions: 3,
    current_contract_until: "2023",
    website: "https://www.danielricciardo.com/",
  },
  {
    id: 6,
    name: "Lando Norris",
    team: "McLaren",
    nationality: "British",
    birth_date: "1999-11-13",
    championships: 0,
    race_wins: 0,
    podiums: 7,
    pole_positions: 0,
    current_contract_until: "2025",
    website: "https://www.landonorris.com/",
  },
  {
    id: 7,
    name: "Sebastian Vettel",
    team: "Aston Martin",
    nationality: "German",
    birth_date: "1987-07-03",
    championships: 4,
    race_wins: 53,
    podiums: 122,
    pole_positions: 57,
    current_contract_until: "2023",
    website: "https://www.sebastianvettel.com/",
  },
  {
    id: 8,
    name: "Fernando Alonso",
    team: "Alpine",
    nationality: "Spanish",
    birth_date: "1981-07-29",
    championships: 2,
    race_wins: 32,
    podiums: 97,
    pole_positions: 22,
    current_contract_until: "2022",
    website: "https://www.fernandoalonso.com/",
  },
  {
    id: 9,
    name: "Sergio Perez",
    team: "Red Bull Racing",
    nationality: "Mexican",
    birth_date: "1990-01-26",
    championships: 0,
    race_wins: 2,
    podiums: 12,
    pole_positions: 2,
    current_contract_until: "2023",
    website: "https://www.sergioperez.com/",
  },
  {
    id: 10,
    name: "Pierre Gasly",
    team: "Scuderia AlphaTauri",
    nationality: "French",
    birth_date: "1996-02-07",
    championships: 0,
    race_wins: 1,
    podiums: 3,
    pole_positions: 1,
    current_contract_until: "2023",
    website: "https://www.pierregasly.com/",
  },
];

server.get("/teams", async (resquest, response) => {
  response.type("application/json").code(200);
  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);
    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver not Found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
