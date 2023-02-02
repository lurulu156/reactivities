using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class ActivitiesController : BaseApiController
  {
    [HttpGet] //api/activities
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
      return await Mediator.Send(new List.Query());
    }

    [HttpGet("{id}")] //api/activities/15
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
      return await Mediator.Send(new Details.Query{Id = id});
    }

    [HttpPost]
    public async Task<IActionResult> CreateActivity(Activity activity)
    {
      return Ok(await Mediator.Send(new Create.Command {Activity = activity}));
    }
  }
}