import { readdir, readFile } from "fs/promises"
import path from "path"

export async function getFileNames(): Promise<string[]> {
  const dir = path.join(process.cwd(), 'public/markdown')
  const files = await readdir(dir)
  return files // .map(n => n)
}

export async function getFileContent(name: string): Promise<string | null> {
  const filePath = path.join(process.cwd(), 'public/markdown', name)
  const file = await readFile(filePath, 'utf-8')
  return file
}
