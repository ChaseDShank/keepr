using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using keepr.Models;
using Dapper;
using MySql.Data.MySqlClient;

namespace keepr.Repositories
{
    public class VaultKeepRepository
    {
        private readonly IDbConnection _db;

        public VaultKeepRepository(IDbConnection db)
        {
            _db = db;
        }

        // Find One Find Many add update delete
        public IEnumerable<Keep> GetAll(int id)
        {
            return _db.Query<Keep>($@"
            SELECT * FROM VaultKeeps vk
            INNER JOIN keeps k ON k.id = vk.keepId
            WHERE (vaultId = {id})");
        }

        public VaultKeep GetById(int id)
        {
            return _db.QueryFirstOrDefault<VaultKeep>($"SELECT * FROM VaultKeeps WHERE id = @id", id);
        }

        public VaultKeep Add(VaultKeep vaultkeep)
        {

            int id = _db.ExecuteScalar<int>("INSERT INTO VaultKeeps (VaultId, KeepId, UserId)"
                        + " VALUES(@VaultId, @KeepId, @UserId); SELECT LAST_INSERT_ID()", new
                        {
                            vaultkeep.VaultId,
                            vaultkeep.KeepId,
                            vaultkeep.UserId
                        });
            vaultkeep.Id = id;
            return vaultkeep;

        }

        

        public string FindByIdAndRemove(int vaultId, int id)
        {
            var success = _db.Execute($@"
                DELETE FROM VaultKeeps WHERE vaultId = {id} AND keepId = {id}
            ", id);
            return success > 0 ? "success" : "that didnt work";
        }
    }
}