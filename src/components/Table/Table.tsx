import React from 'react';
import './Table.css';

interface Props {
  types: string[];
  stats: Stats;
  weight: number;
  moves: number;
}

export const Table: React.FC<Props> = (props) => {
  const {
    types,
    stats,
    weight,
    moves,
  } = props;
  const {
    attack,
    defense,
    hp,
    spAttack,
    spDefense,
    speed,
  } = stats;

  return (
    <table className="SelectedCard__table Table">
      <tbody>
        <tr>
          <th className="Table__element">
            Type
          </th>
          <td className="Table__element">
            {types.join(' ')}
          </td>
        </tr>
        <tr>
          <th className="Table__element">
            Attack
          </th>
          <td className="Table__element">
            {attack}
          </td>
        </tr>
        <tr>
          <th className="Table__element">
            Defense
          </th>
          <td className="Table__element">
            {defense}
          </td>
        </tr>
        <tr>
          <th className="Table__element">
            HP
          </th>
          <td className="Table__element">
            {hp}
          </td>
        </tr>
        <tr>
          <th className="Table__element">
            SP Attack
          </th>
          <td className="Table__element">
            {spAttack}
          </td>
        </tr>
        <tr>
          <th className="Table__element">
            SP Defense
          </th>
          <td className="Table__element">
            {spDefense}
          </td>
        </tr>
        <tr>
          <th className="Table__element">
            Speed
          </th>
          <td className="Table__element">
            {speed}
          </td>
        </tr>
        <tr>
          <th className="Table__element">
            Weight
          </th>
          <td className="Table__element">
            {weight}
          </td>
        </tr>
        <tr>
          <th className="Table__element">
            Total moves
          </th>
          <td className="Table__element">
            {moves}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
