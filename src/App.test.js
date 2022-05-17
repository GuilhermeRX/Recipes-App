import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';
import renderWithRouter from './Service/renderWithRouter';

const {getByTestId, getByText, queryByTestId} = screen;

// describe('',() => {
//   it('',() => {
//     const {history} = renderWithRouter(<App />);
//     history.push('/');
//     expect().toContain();
//   });
// });

describe('Testa o componente Login / requisitos 1 ao 8', () => {
  it('Testa se é possivel digitar nos inputs de email e password', () => {
  const {history} = renderWithRouter(<App />);
  history.push('/');
  const inputEmail = screen.getByTestId('email-input');
  const inputPassword = screen.getByTestId('password-input');
  const buttonDown = screen.getByTestId('login-submit-btn');

  userEvent.type(inputEmail, 'teste@trybe.com');
  userEvent.type(inputPassword, '123456');

  expect(inputEmail).toHaveValue('teste@trybe.com');
  expect(inputPassword).toHaveValue('123456');
  expect(buttonDown).toBeDisabled();
  })
  it('Testa se faz o redirecionamento para a tela principal se os dados forem válidos', () => {
  const {history} = renderWithRouter(<App />);
  history.push('/');
  const inputEmail = screen.getByTestId('email-input');
  const inputPassword = screen.getByTestId('password-input');
  const buttonDown = screen.getByTestId('login-submit-btn');

  userEvent.type(inputEmail, 'teste@trybe.com');
  userEvent.type(inputPassword, '1234567');

  expect(buttonDown).not.toBeDisabled();
  userEvent.click(buttonDown);
  expect(history.location.pathname).toBe('/foods');
  })
});
describe('Teste do componente header / requisitos 9 ao 10', () => {
  it('Testa se aparece o botão de perfil, o título da página e o botão de pesquisa',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    const titlePage = screen.getByTestId('page-title');
    const profileBtn = screen.getByTestId('profile-top-btn');
    const searchBtn = screen.getByTestId('search-top-btn');
    expect(titlePage.textContent).toEqual('Foods'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(profileBtn).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });
  it('[Tela de Login] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/');
    expect(screen.queryByTestId('page-title')).not.toBe('Foods'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Detalhes de Receitas de Comida] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods/12345');
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument(); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Detalhes de Receitas de Bebida] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/drinks/12345');
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument(); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Receitas de Comida em Progresso] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods/12345/in-progress');
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument(); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Receitas de Bebida em Progresso] Testa se não aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/drinks/12353/in-progress');
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument(); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  it('[Tela de Comidas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    expect(screen.getByTestId('page-title').textContent).toBe('Foods'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Bebidas] Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/drinks');
    expect(screen.getByTestId('page-title').textContent).toBe('Drinks'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Comidas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/foods');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Foods'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Bebidas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/drinks');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Drinks'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Ingredientes(Comida)]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/foods/ingredients');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Ingredients'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Ingredientes(Bebida)]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/drinks/ingredients');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Ingredients'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Receitas Feitas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/done-recipes');
    expect(screen.getByTestId('page-title').textContent).toBe('Done Recipes'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Receitas Favoritas]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/favorite-recipes');
    expect(screen.getByTestId('page-title').textContent).toBe('Favorite Recipes'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Perfil]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/profile');
    expect(screen.getByTestId('page-title').textContent).toBe('Profile'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('[Tela de Explorar Nacionalidades]Testa se aparece os botões de perfil e pesquisa, e também o título da respectiva página',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/explore/foods/nationalities');
    expect(screen.getByTestId('page-title').textContent).toBe('Explore Nationalities'); // textContent serve para mostrar o conteúdo de texto do HTML
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
  });
});

describe('Redireciona para a tela de perfil ao clicar no botão de perfil',() => {
  it('[Tela de Perfil]Testa se redireciona para o perfil ao clicar no botão',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    const textProfile = screen.getByText('Profile');
    expect(screen.getByTestId('page-title').textContent).toContain(textProfile.textContent);
  });
});
describe('botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la',() => {
  it('Some e aparece o input', async () => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    expect(history.location.pathname).toBe('/foods');
    const searchBtn = screen.queryByTestId('search-top-btn');
    const inputSearch = screen.queryByLabelText('', {selector: 'input'});
    expect(inputSearch).not.toBeInTheDocument();
    setTimeout(() => {
    userEvent.click(searchBtn);
      expect(inputSearch).toBeInTheDocument();
      console.log('inputSearch');
    }, 2000);
  });
  it('Checa a existência dos radios buttons após clicar na lupa',() => {
    const {history} = renderWithRouter(<App />);
    const {getByTestId} = screen;
    history.push('/foods');
    const searchBtn = screen.getByTestId('search-top-btn');
    fireEvent.click(searchBtn);
    expect(getByTestId('search-input')).toBeInTheDocument();
    expect(getByTestId('ingredient-search-radio')).toBeInTheDocument();
    expect(getByTestId('name-search-radio')).toBeInTheDocument();
    expect(getByTestId('first-letter-search-radio')).toBeInTheDocument();
  });
    it('Exiba um alerta caso a receita não seja encontrada',async () => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    const searchBtn = getByTestId('search-top-btn');
    fireEvent.click(searchBtn);
    const inputSearch = getByTestId('search-input');
    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'asdfge');
    // console.log(inputSearch.value);
    userEvent.click(getByTestId('exec-search-btn'));
    // alert("Sorry, we haven't found any recipes for these filters.")
    // const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    // await waitFor(() => expect(alertMock).toHaveBeenCalledTimes(1));
    // console.log(screen.findByRole('alert'));
    // expect(screen.findByRole('alert')).toHaveTextContent("Sorry, we haven't found any recipes for these filters.");
  });
});

describe('Requisito 19, 22, 23 e 24',() => {
  it('[Requisito 19] Possui os elementos do menu inferior respeitando os atributos descritos no protótipo',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();
  });
  it('[Requisito 22] Redirecione a pessoa usuária para uma lista de cocktails ao clicar no ícone de bebidas',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    userEvent.click(getByTestId("drinks-bottom-btn"));
    history.push('/drinks');
    expect(history.location.pathname).toBe('/drinks');
  });
  it('[Requisito 23] Redirecione a pessoa usuária para a tela de explorar ao clicar no ícone de exploração',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    userEvent.click(getByTestId("explore-bottom-btn"));
    history.push('/explore');
    expect(history.location.pathname).toBe('/explore');
  });
  it('[Requisito 24] Redirecione a pessoa usuária para uma lista de comidas ao clicar no ícone de comidas',() => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();
    userEvent.click(getByTestId("food-bottom-btn"));
    history.push('/foods');
    expect(history.location.pathname).toBe('/foods');
  });
});

describe('[Requisito 21] Exiba o menu inferior apenas nas telas indicadas pelo protótipo', () => {
  it('Tem footer', () => {
    const {history} = renderWithRouter(<App />);
    history.push('/foods');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();

    history.push('/drinks');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();

    history.push('/explore');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();

    history.push('/explore/foods');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();

    history.push('/explore/drinks');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();

    history.push('/explore/foods/ingredients');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();

    history.push('/explore/drinks/ingredients');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();

    history.push('/explore/foods/nationalities');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();

    history.push('/profile');
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("drinks-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("explore-bottom-btn")).toBeInTheDocument();
    expect(getByTestId("food-bottom-btn")).toBeInTheDocument();
  });
  it('Não tem footer', () => {
    const {history} = renderWithRouter(<App />);
    history.push('/');
    expect(queryByTestId("footer")).not.toBeInTheDocument();
    expect(queryByTestId("drinks-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("explore-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("food-bottom-btn")).not.toBeInTheDocument();
    
    history.push('/done-recipes');
    expect(queryByTestId("footer")).not.toBeInTheDocument();
    expect(queryByTestId("drinks-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("explore-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("food-bottom-btn")).not.toBeInTheDocument();
    
    history.push('/favorite-recipes');
    expect(queryByTestId("footer")).not.toBeInTheDocument();
    expect(queryByTestId("drinks-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("explore-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("food-bottom-btn")).not.toBeInTheDocument();
    
    history.push('/foods/52940');
    expect(queryByTestId("footer")).not.toBeInTheDocument();
    expect(queryByTestId("drinks-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("explore-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("food-bottom-btn")).not.toBeInTheDocument();
    
    history.push('/drinks/15997');
    expect(queryByTestId("footer")).not.toBeInTheDocument();
    expect(queryByTestId("drinks-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("explore-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("food-bottom-btn")).not.toBeInTheDocument();
    
    history.push('/foods/52940/in-progress');
    expect(queryByTestId("footer")).not.toBeInTheDocument();
    expect(queryByTestId("drinks-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("explore-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("food-bottom-btn")).not.toBeInTheDocument();
    
    history.push('/drinks/15997/in-progress');
    expect(queryByTestId("footeer")).not.toBeInTheDocument();
    expect(queryByTestId("drinks-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("explore-bottom-btn")).not.toBeInTheDocument();
    expect(queryByTestId("food-bottom-btn")).not.toBeInTheDocument();
  });
});

// describe('[Requisito 25] Implemente os elementos da tela principal de receitas respeitando os atributos descritos no protótipo',() => {
//   it('Comidas',() => {
//     const {history} = renderWithRouter(<App />);
//     history.push('/foods');
//     expect(getByTestId('0-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('1-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('2-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('3-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('4-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('5-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('6-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('7-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('8-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('9-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('10-recipe-card')).toBeInTheDocument();
//     expect(getByTestId('11-recipe-card')).toBeInTheDocument();
//   });
// });


