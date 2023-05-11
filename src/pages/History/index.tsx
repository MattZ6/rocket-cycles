import { HistoryPageStyles as Styles } from './styles'

export default function HistoryPage() {
  return (
    <Styles.Container>
      <h1>History</h1>

      <Styles.History>
        <div>
          <Styles.Table>
            <Styles.TableHead>
              <tr>
                <th>Task</th>
                <th>Duration</th>
                <th>Start</th>
                <th>Status</th>
              </tr>
            </Styles.TableHead>

            <Styles.TableBody>
              <tr>
                <td>Project #1</td>
                <td>20 minutes</td>
                <td>2 days ago</td>
                <td>
                  <Styles.Status statusColor="success">Done</Styles.Status>
                </td>
              </tr>

              <tr>
                <td>Project #2</td>
                <td>15 minutes</td>
                <td>2 days ago</td>
                <td>
                  <Styles.Status statusColor="failure">Stopped</Styles.Status>
                </td>
              </tr>

              <tr>
                <td>Project #3</td>
                <td>25 minutes</td>
                <td>2 days ago</td>
                <td>
                  <Styles.Status statusColor="inProgress">
                    In progress
                  </Styles.Status>
                </td>
              </tr>
            </Styles.TableBody>
          </Styles.Table>
        </div>
      </Styles.History>
    </Styles.Container>
  )
}
