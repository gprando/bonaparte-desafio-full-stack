import React, { useCallback } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { Content, Modal } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  titleType: Yup.string().required('O nome é obrigatório!'),
  tconst: Yup.string()
    .required('Informe um id!')
    .max(30, 'Informe menos de 30 caracteres!'),
  primaryTitle: Yup.string()
    .required('Informe o título principal!')
    .max(30, 'Informe menos de 30 caracteres!'),
  originalTitle: Yup.string()
    .required('Informe o título original!')
    .max(30, 'Informe menos de 30 caracteres!'),
  isAdult: Yup.boolean()
    .typeError('Informe se o filme é para maiories de 18 anos!')
    .required(),
  startYear: Yup.number()
    .required('informe o ano de início!')
    .typeError('informe o ano de início!'),
  runtimeMinutes: Yup.number()
    .required('informe o tempo!')
    .typeError('informe o tempo!'),
  genres: Yup.string()
    .required('Informe os gêneros!')
    .max(30, 'Informe menos de 30 caracteres!'),
});
export default function ModalNewMovie({ isOpen, setIsOpen }) {
  const handleSubmit = useCallback(
    async ({
      tconst,
      titleType,
      primaryTitle,
      originalTitle,
      isAdult,
      startYear,
      endYear,
      runtimeMinutes,
      genres,
    }) => {
      try {
        const data = {
          tconst,
          titleType,
          primaryTitle,
          originalTitle,
          isAdult,
          startYear,
          endYear,
          runtimeMinutes,
          genres,
        };
        await api.post(`/movies`, data);

        setIsOpen(false);

        toast.success(`Filme cadastrado com sucesso!`);
      } catch (error) {
        toast.error(`Erro ao criar filme!`);
      }
    },
    [setIsOpen]
  );

  const adult_options = [
    { id: 'true', title: 'sim' },
    { id: 'false', title: 'não' },
  ];

  return (
    <Modal
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      <Content>
        <h1>Cadastrar filme</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="tconst" placeholder="Informe um id" />
          <Input name="titleType" placeholder="filme, série...?" />
          <Input
            name="primaryTitle"
            type="text"
            placeholder="Título primário"
          />

          <Input
            name="originalTitle"
            type="text"
            placeholder="Título original "
          />

          <Select
            name="isAdult"
            options={adult_options}
            placeholder="Filme +18 ?"
          />

          <Input name="startYear" type="text" placeholder="Ano de estréia" />
          <Input name="endYear" type="text" placeholder="Ano de término " />
          <Input
            name="runtimeMinutes"
            type="text"
            placeholder="Tempo de execução"
          />
          <Input name="genres" type="text" placeholder="Gêneros" />

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Modal>
  );
}

ModalNewMovie.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
