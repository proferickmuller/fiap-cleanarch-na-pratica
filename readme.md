# Live - Clean Architecture na Prática

**Objetivo**: mostrar como usar as ideias da Clean Architecture em um projeto, partindo do zero, com a mentalidade ágil.

## Regras:

0. Faça uma coisa de cada vez.
1. Sempre comece pelo use case. Implemente ele, defina tudo o que ele precisa, e depois construa o controller para fazer o use case funcionar. Depois disso, ajuste os Presenters e Gateways.
2. Não comece pela API ou pelo banco de dados. No máximo, se necessário, tenha um desenho de api para comunicar com o mundo exterior, mas que pode ajudar na definição dos casos de uso.
3. Esqueça os frameworks nesse momento. foque nas três camadas internas.
4. Use interfaces para todos os lugares onde é necessário a injeção de dependência.
5. Se quiser testar um caso de uso com gateway, use um "fornecedor de dados" falso (*mock*). Depois você pode implementar o acesso ao banco de dados.

## Heurísticas

Pequenos passos te levam longe.

Entenda e defina -> Construa -> Teste -> Disponibilize.