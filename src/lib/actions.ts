'use server'
import * as Wakatime from '@/types/wakatimeResponse'

export const weeklyCodingActivity = async () => {
  const res = await fetch('https://wakatime.com/share/@IlmiMubarok21/0a907078-6774-4d93-bc08-8f77f8006b2d.json')
  return res.json() as Promise<Wakatime.WeeklyCodingActivity>
}

export const weeklyCodingLanguanges = async () => {
  const res = await fetch('https://wakatime.com/share/@IlmiMubarok21/b86ad318-ec5e-4c87-b3ae-4f67e1a31857.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodingLanguanges>
}

export const weeklyCodeEditor = async () => {
  const res = await fetch('https://wakatime.com/share/@IlmiMubarok21/291bba2f-b4ed-4509-ae67-e3972bbe95df.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>
}

export const weeklyOperatingSystems = async () => {
  const res = await fetch('https://wakatime.com/share/@IlmiMubarok21/65d7e512-4a8a-4915-a9f6-bffff57b8ebd.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>
}
