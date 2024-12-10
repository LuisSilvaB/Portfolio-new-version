export interface Title {
  en: string
  es: string
}

export type WorkExperience = {
  title: Title
  experiences: ExperiencesType[]
}

export type ExperiencesType = Array<{
  title: {
    en: string
    es: string
  }
  date: {
    en: string
    es: string
  }
  description?: {
    en: string
    es: string
  }
  techStack?: {
    title: {
      en: string
      es: string
    }
    description: {
      en: string
      es: string
    }
  }
}>

export type ExperienceType = {
  title: {
    en: string;
    es: string;
  };
  date: {
    en: string;
    es: string;
  };
  description?: {
    en: string;
    es: string;
  };
  techStack?: {
    title: {
      en: string;
      es: string;
    };
    description: {
      en: string;
      es: string;
    };
  };
};