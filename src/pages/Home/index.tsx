import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useCycles } from '@hooks/useCycles'

import { Countdown, NewCycleForm } from './components'
import { NewCycleFormData, newCycleSchema } from './scheme'
import { HomePageStyles as Styles } from './styles'

export default function HomePage() {
  const { t } = useTranslation('timer')

  const { activeCycle, createNewCycle, interruptCurrentCycle } = useCycles()

  const form = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = form

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <Styles.Container>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...form}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <Styles.StopCountdownButton
            onClick={interruptCurrentCycle}
            type="button"
          >
            <HandPalm size={24} />
            {t('start')}
          </Styles.StopCountdownButton>
        ) : (
          <Styles.StartCountdownButton
            disabled={isSubmitDisabled}
            type="submit"
          >
            <Play size={24} />
            {t('start')}
          </Styles.StartCountdownButton>
        )}
      </form>
    </Styles.Container>
  )
}
