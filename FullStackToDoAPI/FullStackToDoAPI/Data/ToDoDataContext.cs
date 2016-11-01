using FullStackToDoAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace FullStackToDoAPI.Data
{
    public class ToDoDataContext : DbContext 

    {
        public ToDoDataContext() : base("FullStackToDoAPI")
        {

        }
        public IDbSet<Todo>Todoes{ get; set; }

    }
}