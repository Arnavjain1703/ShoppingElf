//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ShoppingELF
{
    using System;
    using System.Collections.Generic;
    
    public partial class CategoryTable
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CategoryTable()
        {
            this.SubCategoryTable = new HashSet<SubCategoryTable>();
        }
    
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public int SuitableID { get; set; }
    
        public virtual SuitableForTable SuitableForTable { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SubCategoryTable> SubCategoryTable { get; set; }
    }
}