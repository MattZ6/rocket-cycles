import { z } from 'zod'

export const newCycleSchema = z.object({
  task: z.string().trim().nonempty('Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 1 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

export type NewCycleFormData = z.infer<typeof newCycleSchema>
