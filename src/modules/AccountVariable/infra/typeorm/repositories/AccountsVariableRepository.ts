import { AccountConstant } from "modules/AccountConstant/infra/typeorm/entities/AccountConstant";
import { Repository } from "typeorm";

class AccountsVariableRepository {
    private repository: Repository<AccountConstant>
}

export {AccountsVariableRepository}