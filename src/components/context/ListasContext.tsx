import React, { createContext, useContext, useState } from 'react';

const ListasContext = createContext();

export const ListasProvider = ({ children }) => {
  const [lista1, setLista1] = useState([
    {
      foto: 'card10',
      titulo: "Adicione até 5 paradas",
      descricao: "Aproveite para retirar algo no caminho"
    },
    {
      foto: 'card11',
      titulo: "Viagens com o app Uber moto",
      descricao: "Viagens econômicas de moto"
    }
  ]);

  const [lista2, setLista2] = useState([
    {
      foto: 'card01',
      titulo: "Surpreenda seus clientes",
      descricao: "Envie itens para eles"
    },
    {
      foto: 'card03',
      titulo: "Entregue itens com tranquilidade",
      descricao: "Acompanhe e receba notificações de envios e entregas"
    },
    {
      foto: 'card02',
      titulo: "Esqueceu de algo em algum lugar?",
      descricao: "Receba a entrega do seu objeto onde você estiver"
    },
    {
      foto: 'card04',
      titulo: "Envie um presente",
      descricao: "Entregue no mesmo dia suas surpresas especiais"
    },
    {
      foto: 'card05',
      titulo: "Enviar itens",
      descricao: "O Uber Flash espera por você"
    }
  ]);

  const [lista3, setLista3] = useState([
    {
      foto: 'card03',
      titulo: "Envie um item",
      descricao: "Entrega sob demanda em toda a cidade"
    },
    {
      foto: 'card07',
      titulo: "Viaje com conforto",
      descricao: "Os motoristas parceiros mais bem avaliados e os carros mais novos"
    },
    {
      foto: 'card06',
      titulo: "Recursos de segurança",
      descricao: "Recursos de segurança durante a viagem"
    }
  ]);

  return (
    <ListasContext.Provider value={{ lista1, lista2, lista3 }}>
      {children}
    </ListasContext.Provider>
  );
};

export const useListas = () => {
  return useContext(ListasContext);
};

