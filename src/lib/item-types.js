import config from '@/config'

const itemTypes = {
  'my-access-key': {
    name: 'access-key', // TODO Redundant, change this structure
    restCollectionName: 'access-keys',
    httpOptions: {
      list: {
        url: `${config.apiBaseUrl}/users/me/access-keys`
      }
    }
  },
  'doi-identifier-search': {
    name: 'doi-identifier', // TODO Redundant, change this structure
    restCollectionName: 'doiIdentifiers',
    httpOptions: {
      list: {
        method: 'post',
        url: `${config.apiBaseUrl}/doiIdentifiers/search`
      }
    }
  },
  'experiment': {
    name: 'experiment', // TODO Redundant, change this structure
    restCollectionName: 'experiments',
    primaryKey: 'urn'
  },
  'experimentSet': {
    name: 'experimentSet', 
    restCollectionName: 'experimentSets',
    primaryKey: 'urn'
  },
  'pubmed-identifier-search': {
    name: 'pubmed-identifier', // TODO Redundant, change this structure
    restCollectionName: 'pubmedIdentifiers',
    httpOptions: {
      list: {
        method: 'post',
        url: `${config.apiBaseUrl}/pubmedIdentifiers/search`
      }
    }
  },
  'reference-genome': {
    name: 'reference-genome', // TODO Redundant, change this structure
    restCollectionName: 'referenceGenomes'
  },
  'scoreset': {
    name: 'scoreset', // TODO Redundant, change this structure
    restCollectionName: 'scoresets',
    primaryKey: 'urn'
  },
  'target-gene-search': {
    name: 'target-gene', // TODO Redundant, change this structure
    restCollectionName: 'targetGenes',
    httpOptions: {
      list: {
        method: 'post',
        url: `${config.apiBaseUrl}/targetGenes/search`
      }
    }
  },
  'me': {
    name: 'me',
    restCollectionName: 'users',
    primaryKey: () => 'me'
  }
}

export default itemTypes
