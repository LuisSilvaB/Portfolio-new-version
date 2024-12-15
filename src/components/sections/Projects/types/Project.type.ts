export interface ProjectSectionType {
  title: TitleType
  secondaryTitle: SecondaryTitleType
  secondaryDescription: SecondaryDescriptionType
  projects: ProjectType[]
}

export interface TitleType {
  en: string
  es: string
}

export interface SecondaryTitleType {
  en: string
  es: string
}

export interface SecondaryDescriptionType {
  en: string
  es: string
}

export interface ProjectType {
  title: Title2Type
  description: DescriptionType
  technologies: string[]
  git_url: string | null
  url: string
  img_url: string
}

export interface Title2Type {
  en: string
  es: string
}

export interface DescriptionType {
  en: string
  es: string
}

export type TechnologiesType =
  | "nextjs"
  | "tailwind"
  | "supabase"
  | "react"
  | "oauth"
  | "chadcn"
  | "redux"
  | "typescript"
  | "styled"
  | "aws"
  | "vite"
  | "mysql"
  | "postgres"
  | "world"
  | "express"
  | "github"
  | "python"
  | "flask"
  | "ecs"
  | "reactForm"
  | "css"
  | "html"
  | "javascript";

