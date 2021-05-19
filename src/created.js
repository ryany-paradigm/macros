import EntityFactory from '@/entities/factory'
import InteractorFactory from '@/interactors/factory'
import GatewayFactory from '@/gateways/factory'

export default function created () {
  const entities = new EntityFactory()
  const gateways = new GatewayFactory(this.$store)
  this.interactors = new InteractorFactory({ entities, gateways })
}
