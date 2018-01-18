using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using keepr.Models;
using Dapper;
using MySql.Data.MySqlClient;

namespace keepr.Repositories
{
    public class KeepRepository
    {
        private readonly IDbConnection _db;

        public KeepRepository(IDbConnection db)
        {
            _db = db;
        }

        // Find One Find Many add update delete
        public IEnumerable<Keep> GetAll()
        {
            return _db.Query<Keep>("SELECT * FROM Keeps");
        }

        public Keep GetById(int id)
        {
            return _db.QueryFirstOrDefault<Keep>($"SELECT * FROM Keeps WHERE id = @id", id);
        }

        public Keep Add(Keep keep)
        {

            int id = _db.ExecuteScalar<int>("INSERT INTO Keeps (Title, Description, ImgUrl, UserId, KeepCount, ViewCount)"
                        + " VALUES(@Title, @Description, @ImgUrl, @UserId, @KeepCount, @ViewCount); SELECT LAST_INSERT_ID()", new
                        {
                            keep.Title,
                            keep.Description,
                            keep.ImgUrl,
                            keep.UserId,
                            keep.KeepCount,
                            keep.ViewCount

                        });
            keep.Id = id;
            return keep;

        }

        public Keep GetOneByIdAndUpdate(int id, Keep keep)
        {
            return _db.QueryFirstOrDefault<Keep>($@"
                UPDATE Keeps SET  
                    Title = @Title,
                    Description = @Description,
                    ImgUrl = @ImgUrl,
                    UserId = @UserId,
                    KeepCount = @KeepCount,
                    ViewCount = @ViewCount
                WHERE Id = {id};
                SELECT * FROM Keeps WHERE id = {id};", keep);
        }

        public string FindByIdAndRemove(int id)
        {
            var success = _db.Execute($@"
                DELETE FROM Keeps WHERE Id = {id}
            ", id);
            return success > 0 ? "success" : "that didnt work";
        }
    }
}