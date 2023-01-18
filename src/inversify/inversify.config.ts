import { Container } from "inversify";
import { OddsAdapter } from "../odds/odds.adapter";
import { IOddsService } from "../odds/odds.port";
const container = new Container();

container.bind<IOddsService>("IOddsService").to(OddsAdapter);
