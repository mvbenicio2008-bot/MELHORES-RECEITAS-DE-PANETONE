"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, CheckCircle2, Star, Clock, Shield } from "lucide-react"

export default function Home() {
  const checkoutBasico = "https://pay.greenn.com.br/1763606543415"
  const checkoutPremium = "https://pay.greenn.com.br/1763606775898"

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="bg-[#1a0f0a] text-white py-3 px-3 text-center text-xs sm:text-sm">
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          <Lock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="font-medium">SSL Seguro • Compra 100% Protegida • Acesso imediato</span>
        </div>
      </div>

      <section className="bg-gradient-to-b from-[#2d1810] to-[#1a0f0a] text-white px-3 py-8 sm:px-4 sm:py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-3 bg-[#d4a574] text-[#1a0f0a] hover:bg-[#d4a574] px-3 py-1.5 text-xs sm:text-sm font-semibold">
            🎄 Edição Especial de Natal
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight px-2">
            O Maior Livro de Receitas de Panetone do Brasil
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-[#d4a574] leading-relaxed px-2">
            Aprenda a fazer panetones artesanais incríveis que vendem todos os dias — durante e fora do Natal!
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-2">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0" />
              <span>Acesso Vitalício</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0" />
              <span>Material em PDF</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0" />
              <span>Receitas Profissionais</span>
            </div>
          </div>
          <img
            src="/images/panetone-20trufado-20com-20brigadeiro.jpeg"
            alt="Panetone Artesanal Trufado"
            className="w-full max-w-2xl mx-auto rounded-xl sm:rounded-2xl shadow-2xl mb-6 sm:mb-8"
          />
          <p className="text-xl sm:text-2xl font-bold text-[#d4a574] mb-6 sm:mb-8 px-2">
            💛 Receitas simples, lucrativas e de nível profissional
          </p>
          <div className="w-full max-w-md mx-auto p-1 bg-gradient-to-r from-[#f59e0b] via-[#d4a574] to-[#f59e0b] rounded-xl shadow-2xl">
            <Button
              onClick={() => window.open(checkoutPremium, "_blank")}
              className="w-full bg-[#d4a574] hover:bg-[#c49464] text-[#1a0f0a] font-bold text-base sm:text-xl px-4 sm:px-8 py-5 sm:py-7 shadow-xl rounded-lg"
            >
              🎁 QUERO ACESSO AGORA
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-3 py-12 sm:px-4 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#1a0f0a] px-2">
            📘 O que você vai aprender dentro do material
          </h2>
          <p className="text-center text-base sm:text-lg mb-6 sm:mb-8 text-[#4a3728] px-2">
            Uma coleção completa com diversas receitas e variações:
          </p>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 mb-6 sm:mb-8">
            {[
              "Panetone Tradicional",
              "Panetone Trufado",
              "Panetone de Nutella",
              "Panetone de Pistache",
              "Panetone Crocante Caramelizado",
              "Panetone de Doce de Leite",
              "Chocotone Fudge",
              "Panetone Red Velvet",
              "Massa Base Ultra Macia",
              "Recheios Profissionais",
              "Coberturas Gourmet",
              "Técnicas de Fermentação",
              "Guia de Precificação",
              "Checklist de Produção",
              "Como Vender Muito no Natal",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-[#f5f1ed]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#1a0f0a] font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#d4a574]/10 p-4 sm:p-6 rounded-lg border-2 border-[#d4a574]">
            <div className="flex flex-col gap-2 text-[#1a0f0a]">
              <p className="flex items-center gap-2 font-semibold text-base sm:text-lg">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0" />
                Receitas inéditas
              </p>
              <p className="flex items-center gap-2 font-semibold text-base sm:text-lg">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0" />
                Ingredientes simples
              </p>
              <p className="flex items-center gap-2 font-semibold text-base sm:text-lg">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0" />
                Resultados de confeitaria profissional
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1ed] px-3 py-12 sm:px-4 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#1a0f0a] px-2">
            🍞 Por que este material é diferente de tudo?
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <Card className="p-4 sm:p-6 text-center bg-white border-[#d4a574]/20">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#d4a574]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1a0f0a]">
                💡 Receitas Testadas e Aprovadas
              </h3>
              <p className="text-sm sm:text-base text-[#4a3728] leading-relaxed">
                Panetones fofinhos, úmidos, aromáticos e com aquele sabor que as padarias de luxo escondem.
              </p>
            </Card>
            <Card className="p-4 sm:p-6 text-center bg-white border-[#d4a574]/20">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <Star className="w-10 h-10 sm:w-12 sm:h-12 text-[#d4a574]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1a0f0a]">🖨️ PDF em Alta Qualidade</h3>
              <p className="text-sm sm:text-base text-[#4a3728] leading-relaxed">
                Receitas ilustradas, passo a passo, impressas ou usadas direto pelo celular.
              </p>
            </Card>
            <Card className="p-4 sm:p-6 text-center bg-white border-[#d4a574]/20">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-[#d4a574]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1a0f0a]">♾️ Acesso Para Sempre</h3>
              <p className="text-sm sm:text-base text-[#4a3728] leading-relaxed">
                Pague uma vez e receba todas as atualizações que forem lançadas no futuro.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white px-3 py-12 sm:px-4 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#1a0f0a] px-2">
            📦 Escolha seu pacote
          </h2>
          <div className="w-full max-w-2xl mx-auto mb-8 sm:mb-12 p-1 bg-gradient-to-r from-[#dc2626] via-[#f97316] to-[#dc2626] rounded-xl shadow-xl">
            <div className="bg-white rounded-lg px-4 py-3">
              <p className="text-center text-base sm:text-lg text-[#1a0f0a] font-bold">
                🔥 Oferta Especial de Natal (ATE AS 23:59)
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8 sm:mb-12">
            <div className="p-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-xl shadow-lg">
              <Card className="p-5 sm:p-8 bg-white h-full">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1a0f0a] mb-2">📘 Pacote Básico</h3>
                  <div className="mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-[#16a34a]">R$ 5,99</span>
                  </div>
                </div>
                <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#1a0f0a]">7 Receitas Completas de Panetone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#1a0f0a]">Guia de Fermentação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#1a0f0a]">Checklist de Produção</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#1a0f0a]">Acesso Vitalício</span>
                  </li>
                </ul>
                <Button
                  onClick={() => window.open(checkoutBasico, "_blank")}
                  className="w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-bold text-sm sm:text-base py-4 sm:py-5 shadow-lg"
                >
                  COMPRAR PACOTE BÁSICO
                </Button>
              </Card>
            </div>

            <Card className="p-5 sm:p-8 border-4 border-[#d4a574] bg-gradient-to-b from-[#fff9f0] to-white relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4a574] text-[#1a0f0a] px-3 py-1 text-xs sm:text-sm font-bold">
                🔥 MAIS VENDIDO
              </Badge>
              <div className="text-center mb-4 sm:mb-6 mt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a0f0a] mb-2">👑 Pacote Premium</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-[#f97316]">R$ 16,90</span>
                </div>
              </div>
              <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#1a0f0a] font-semibold">Tudo do Pacote Básico +</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#1a0f0a]">15+ Receitas Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#1a0f0a]">Recheios e Coberturas Gourmet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#1a0f0a]">Guia Completo de Precificação</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#1a0f0a]">Estratégias de Vendas no Natal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#1a0f0a]">Atualizações Grátis Futuras</span>
                </li>
              </ul>
              <Button
                onClick={() => window.open(checkoutPremium, "_blank")}
                className="w-full bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#dc2626] text-white font-bold text-sm sm:text-base py-4 sm:py-5 shadow-xl animate-pulse"
              >
                QUERO O PACOTE PREMIUM 👑
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1ed] px-3 py-12 sm:px-4 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#1a0f0a] px-2">
            🎁 Perfeito Para:
          </h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <Card className="p-4 sm:p-6 bg-white border-[#d4a574]/20">
              <h3 className="text-base sm:text-xl font-bold text-[#1a0f0a]">
                🍽️ Quem quer vender panetone e lucrar alto
              </h3>
            </Card>
            <Card className="p-4 sm:p-6 bg-white border-[#d4a574]/20">
              <h3 className="text-base sm:text-xl font-bold text-[#1a0f0a]">
                👩‍🍳 Confeiteiras iniciantes ou avançadas
              </h3>
            </Card>
            <Card className="p-4 sm:p-6 bg-white border-[#d4a574]/20">
              <h3 className="text-base sm:text-xl font-bold text-[#1a0f0a]">🎄 Quem ama cozinhar no Natal</h3>
            </Card>
            <Card className="p-4 sm:p-6 bg-white border-[#d4a574]/20">
              <h3 className="text-base sm:text-xl font-bold text-[#1a0f0a]">
                🏡 Famílias que querem panetone artesanal sem pagar caro
              </h3>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white px-3 py-12 sm:px-4 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-[#d4a574] mx-auto mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#1a0f0a] px-2">
            🛡 Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-[#4a3728] leading-relaxed px-2">
            Compre sem risco. Se não gostar das receitas, devolvemos 100% do seu dinheiro.
          </p>
          <Button
            onClick={() => window.open(checkoutPremium, "_blank")}
            className="w-full bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] text-white font-bold text-sm sm:text-lg px-4 sm:px-8 py-4 sm:py-6 leading-tight shadow-2xl"
          >
            <span className="text-balance">👉 TIREI MINHAS DÚVIDAS, QUERO COMEÇAR AGORA</span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0f0a] text-white px-3 py-6 sm:px-4 sm:py-8 text-center">
        <p className="text-xs sm:text-sm text-[#d4a574]">© 2025 - Todos os direitos reservados</p>
      </footer>
    </main>
  )
}
