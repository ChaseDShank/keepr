using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using keepr.Models;
using Dapper;
using MySql.Data.MySqlClient;

namespace keepr.Repositories
{
    public class VaultRepository
    {
        private readonly IDbConnection _db;

        public VaultRepository(IDbConnection db)
        {
            _db = db;
        }

        // Find One Find Many add update delete
        public IEnumerable<Vault> GetAll()
        {
            return _db.Query<Vault>("SELECT * FROM Vaults");
        }

        public Vault GetById(int id)
        {
            return _db.QueryFirstOrDefault<Vault>($"SELECT * FROM Vaults WHERE id = @id", id);
        }

        public Vault Add(Vault vault)
        {

            int id = _db.ExecuteScalar<int>("INSERT INTO Vaults (Name, Description, UserId)"
                        + " VALUES(@Name, @Description, @UserId); SELECT LAST_INSERT_ID()", new
                        {
                            vault.Name,
                            vault.Description,
                            vault.UserId
                        });
            vault.Id = id;
            return vault;

        }

        public Vault GetOneByIdAndUpdate(int id, Vault vault)
        {
            return _db.QueryFirstOrDefault<Vault>($@"
                UPDATE Vaults SET  
                    Name = @Name,
                    Description = @Description,
                    UserId = @UserId
                WHERE Id = {id};
                SELECT * FROM Vaults WHERE id = {id};", vault);
        }

        public string FindByIdAndRemove(int id)
        {
            var success = _db.Execute($@"
                DELETE FROM Vaults WHERE Id = {id}
            ", id);
            return success > 0 ? "success" : "that didnt work";
        }
    }
}