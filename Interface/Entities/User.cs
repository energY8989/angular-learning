using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Interfaces.Entities
{
    [Table("User")]
    public class User
    {
        [Key]
        public int UserId { get; set; }

        public string Username { get; set; }
    }
}
