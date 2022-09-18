import axios from 'axios'
import { Input } from './Forms/input'
import { useEffect, useState, FormEvent } from 'react'
import { GameController, Check } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

interface Game {
    id: string,
    title: string,
    bannerUrl: string;
    _count: {
        ads: number
    }
}

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

    async function handleCreateAd(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (!data.name) {
            return
        }

        try {
            axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                "name": data.name,
                "yearsPlaying": Number(data.yearsPlaying),
                "discord": data.discord,
                "weekDays": weekDays.map(Number),
                "hourStart": data.hourStart,
                "hourEnd": data.hourEnd,
                "useVoiceChannel": useVoiceChannel
            });
            alert('anúncio criado com sucesso')
        } catch (err) {
            console.log(err)
            alert('erro ao criar o anúncio')
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3000/games/')
            .then(response => {
                setGames(response.data)
            })
    }, [])

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
            <Dialog.Content className="fixed bg-[#2A2634] px-10 py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                <Dialog.Title className="text-3xl font-black">Publique seu anúncio</Dialog.Title>
                <form onSubmit={handleCreateAd} className="mt-8 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">Qual o game?</label>
                        <select
                            name="game"
                            placeholder="Selecione o jogo"
                            className="appearance-none bg-zinc-900 py-3 px-4 rounded text-sm"
                            id="game"
                        >
                            <option disabled selected value="">Selecionoe o jogo</option>
                            {games.map(game => <option key={game.id} value={game.id}>{game.title}</option>)}

                        </select>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="name">Seu username</label>
                        <Input
                            name="name"
                            id="name"
                            placeholder="Como te chamam dentro do game?"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Quantos há anos joga</label>
                            <Input
                                name="yearsPlaying"
                                id="yearsPlaying"
                                placeholder='tudo bem ser 0'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Qual seu discord</label>
                            <Input
                                name="discord"
                                type="text"
                                id="discord"
                                placeholder='Usuario#0000'
                            />
                        </div>
                    </div>

                    <div className="flex gap-6 mt-4">
                        <div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="weekDays">Quando costuma jogar?</label>
                            </div>
                            <div>
                                <ToggleGroup.Root
                                    type="multiple"
                                    className="grid grid-cols-4 gap-2"
                                    value={weekDays}
                                    onValueChange={setWeekDays}
                                >
                                    <ToggleGroup.Item
                                        value="0"
                                        className={`h-8 w-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900 '}`}
                                        title="Domingo">
                                        D
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="1"
                                        className={`h-8 w-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900 '}`}
                                        title="Segunda">
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="2"
                                        className={`h-8 w-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900 '}`}
                                        title="Terça">
                                        T
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="3"
                                        className={`h-8 w-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900 '}`}
                                        title="Quarta">
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="4"
                                        className={`h-8 w-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900 '}`}
                                        title="Quinta">
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="5"
                                        className={`h-8 w-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900 '}`}
                                        title="Sexta">
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="6"
                                        className={`h-8 w-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900 '}`}
                                        title="Sábado">
                                        S
                                    </ToggleGroup.Item>
                                </ToggleGroup.Root>
                            </div>

                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Input
                                    name="hourStart"
                                    type="time"
                                    id="hourStart"
                                    placeholder='De'
                                />
                                <Input
                                    name="hourEnd"
                                    type="time"
                                    id="hourEnd"
                                    placeholder='Até'
                                />
                            </div>
                        </div>
                    </div>

                    <label className="mt-4 flex gap-2 text-sm">
                        <Checkbox.Root
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setUseVoiceChannel(true)
                                } else {
                                    setUseVoiceChannel(false)
                                }
                            }}
                            className="w-6 h-6 rounded bg-zinc-900 text-center"
                        >
                            <Checkbox.CheckboxIndicator>
                                <Check className="text-emerald-400 w-4 h-4" />
                            </Checkbox.CheckboxIndicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>

                    <footer className='mt-4 flex justify-end gap-4'>
                        <Dialog.Close
                            type="button"
                            className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                            Cancelar
                        </Dialog.Close>
                        <button className="bg-violet-500 px-5 h-12 rounded-md font-semibold items-center gap-3 hover:bg-violet-600" type="submit">
                            <GameController className='w-6 h-6 inline-block' /> Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}