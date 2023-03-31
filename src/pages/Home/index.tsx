import { Play } from '@phosphor-icons/react'

import { HomePageStyles as Styles } from './styles'

export default function HomePage() {
  return (
    <Styles.Container>
      <Styles.Form action="">
        <Styles.FieldsContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styles.TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para sua atividade"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <Styles.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <label htmlFor="minutesAmount">minutos.</label>
        </Styles.FieldsContainer>

        <Styles.CountdownContainer>
          <Styles.CountdownNumber>0</Styles.CountdownNumber>
          <Styles.CountdownNumber>0</Styles.CountdownNumber>
          <Styles.CountdownSeparator>:</Styles.CountdownSeparator>
          <Styles.CountdownNumber>0</Styles.CountdownNumber>
          <Styles.CountdownNumber>0</Styles.CountdownNumber>
        </Styles.CountdownContainer>

        <Styles.StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </Styles.StartCountdownButton>
      </Styles.Form>
    </Styles.Container>
  )
}
