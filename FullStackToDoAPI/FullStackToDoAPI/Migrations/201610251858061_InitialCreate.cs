namespace FullStackToDoAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Todoes",
                c => new
                    {
                        ToDoEntryId = c.Int(nullable: false, identity: true),
                        addItem = c.String(),
                        selectedPriority = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ToDoEntryId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Todoes");
        }
    }
}
