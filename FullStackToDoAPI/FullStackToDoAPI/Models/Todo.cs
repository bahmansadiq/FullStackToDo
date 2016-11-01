
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FullStackToDoAPI.Models
{
    public class Todo
    {
        // add task primary key
          [Key]
        public int ToDoEntryId { get; set; }

        //add the user task name input and priority selection 
        public string addItem { get; set; }
        public int selectedPriority { get; set; }
    }
}