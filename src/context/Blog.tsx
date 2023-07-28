import { ReactNode, createContext, useEffect, useState } from 'react'
import { listIssuesAPI, profileAPI } from '../lib/axios'

interface UserType {
  name: string
  bio: string
  login: string
  company: string
  followers: number
  htmlUrl: string
}

export interface IssueType {
  issueNumber: number
  title: string
  text: string
  createdAt: string
  comments: number
  htmlUrl: string
}

interface BlogContextType {
  user: UserType
  issues: IssueType[]
  getFullIssue: (issueNumber: number) => IssueType | null
  fetchIssues: (
    user: string,
    repo: string,
    label: string,
    query: string,
  ) => Promise<void>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState<UserType>({} as UserType)
  const [issues, setIssues] = useState<IssueType[]>([])

  async function fetchProfile(query: string) {
    const { data } = await profileAPI.get(`users/${query}`)
    setUser({
      name: data.name,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      htmlUrl: data.html_url,
      login: data.login,
    })
  }

  async function fetchIssues(
    user: string,
    repo: string,
    label: string,
    query: string = '',
  ) {
    const { data } = await listIssuesAPI.get(
      `issues?q=repo:${user}/${repo} label:${label} ${query}`,
    )

    const issuesList: IssueType[] = data.items.map((item) => {
      const issue: IssueType = {
        title: item.title,
        text: item.body,
        comments: item.comments,
        createdAt: item.created_at,
        htmlUrl: item.html_url,
        issueNumber: item.number,
      }
      return issue
    })

    setIssues(issuesList)
  }

  function getFullIssue(issueNumber: number) {
    if (issues.length > 0) {
      const [requiredIssue] = issues.filter(
        (item) => item.issueNumber === issueNumber,
      )
      return requiredIssue
    }
    return null
  }

  useEffect(() => {
    fetchProfile('victoriamartins').catch((e) => console.log(e))
    fetchIssues('victoriamartins', 'gitblog', 'published', '')
  }, [])

  return (
    <BlogContext.Provider value={{ user, issues, getFullIssue, fetchIssues }}>
      {children}
    </BlogContext.Provider>
  )
}
