export class LoginUser {
  constructor(
    public LoginEmailAddress: string,
    public Password: string,
    public LoggedIn: Date)
  {
    this.LoggedIn = new Date();
  }
}
