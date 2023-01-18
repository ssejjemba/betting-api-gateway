import { Container } from "inversify";
import { OddsAdapter } from "../odds/adapters/odds.adapter";
import { IOddsService } from "../odds/ports/odds.port";
import { UsersAdapter } from "../users/adapters/users.adapter";
import { IUsersService } from "../users/ports/users.port";
const container = new Container();

container.bind<IOddsService>("IOddsService").to(OddsAdapter);
container.bind<IUsersService>("IUsersService").to(UsersAdapter);
