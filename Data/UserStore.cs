using Interfaces.Data;
using Interfaces.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public class UserStore : StoreBase<User>, IUserStore
    {
    }
}
