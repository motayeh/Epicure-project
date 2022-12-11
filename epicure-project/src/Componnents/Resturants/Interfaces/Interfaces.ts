interface Sunday {
  Open: string;
  Close: string;
}

interface Monday {
  Open: string;
  Close: string;
}

interface Tuesday {
  Open: string;
  Close: string;
}

interface Wednesday {
  Open: string;
  Close: string;
}

interface Thursday {
  Open: string;
  Close: string;
}

interface Friday {
  Open: string;
  Close: string;
}

interface Suturday {
  Open: string;
  Close: string;
}

interface WorkingDays {
  Sunday: Sunday;
  Monday: Monday;
  Tuesday: Tuesday;
  Wednesday: Wednesday;
  Thursday: Thursday;
  Friday: Friday;
  Suturday: Suturday;
}

interface ResturantInterface {
  ID: number;
  ResturantImage: string;
  ResturantName: string;
  CheifName: string;
  Rate: number;
  Since: number;
  working_Days: WorkingDays;
}
export default ResturantInterface;
