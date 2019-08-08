export class ProjectsService {
  private projects = [
    {
      id: 1,
      name: 'Asteroids 1',
      syntax: 'Java',
      framework: 'JavaFX'
    },
    {
      id: 2,
      name: 'FinnKino app 2',
      syntax: 'JavaScript',
      framework: 'jQuery'
    }, {
      id: 3,
      name: 'Recipe app 3',
      syntax: 'TypeScript',
      framework: 'AngularJs'
    },
  ];

  getProjects() {
    return this.projects;
  }

  getProject(id: number) {
    const project = this.projects.find(
      (p) => {
        return p.id === id;
      }
    );
    return project;
  }


}
