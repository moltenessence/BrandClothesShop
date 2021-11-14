using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.Models
{
    [NotMapped]
    public class OrderRequest
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public int ItemId { get; set; }
        [Required]
        public string Size { get; set; }
    }
}
