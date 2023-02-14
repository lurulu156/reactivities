namespace Domain
{
  public class Activity
  {
    public Guid Id { get; set; }
    public string Title { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public string City { get; set; }
    public string Venue { get; set; }
    public bool IsCancelled { get; set; }

    //relationship
    public ICollection<ActivityAttendee> Attendees { get; set; } = new List<ActivityAttendee>(); //Object reference not set to an instance of an object
    public ICollection<Comment> Comments { get; set; } = new List<Comment>();
  }
}