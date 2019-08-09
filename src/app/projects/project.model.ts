
export class Project {
  id: number;
  name: string;
  syntax: string;
  framework: string;
  details: string;

  constructor(id: number, name: string, syntax: string, framework: string, details: string) {
    this.id = id;
    this.name = name;
    this.syntax = syntax;
    this.framework = framework;
    this.details = details;
  }

}
